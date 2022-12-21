import React from "react";
import { MapBrowserEvent } from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Style from "ol/style/Style";
import Circle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import { MapContext } from "../../map";
import { Polygon } from "ol/geom";


let coordarray = new Array();
let pointsarray = new Array();

class VectorLayerComponent extends React.PureComponent {
  layer1;
  source1;
  layer2;
  source2;

  componentDidMount() {
    this.source1 = new VectorSource({
      features: undefined,
    });

    this.source2 = new VectorSource({
      features: undefined,
    });

    this.layer1 = new VectorLayer({
      source: this.source1,
    });

    this.layer2 = new VectorLayer({
      source: this.source2,
    });

    this.props.map.addLayer(this.layer1);
    this.props.map.addLayer(this.layer2);
    this.props.map.on("singleclick", this.onMapClick);
  }

  onMapClick = (event) => {
    let temp = 0;
    if (document.getElementById("pointbutton").classList.contains("active")) {
      const featureToAdd = new Feature({
        geometry: new Point(event.coordinate),
      });
      pointsarray.push(featureToAdd.getGeometry().getCoordinates());
      const style = new Style({
        image: new Circle({
          radius: 6,
          fill: new Fill({ color: "blue" }),
        }),
      });
      featureToAdd.setStyle(style);
      this.source1.addFeatures([featureToAdd]);
    }

    if (document.getElementById("polygonbutton").classList.contains("active")) {
      if (document.getElementById("polygonbutton").classList.contains("new")) {
        coordarray.length = 0;
        document.getElementById("points-amount").innerHTML = 0;
        document.getElementById("polygonbutton").classList.remove("new");
      }
      coordarray.pop();
      coordarray.push(event.coordinate);
      coordarray.push(coordarray[0]);
      const featureToAdd = new Feature({
        geometry: new Polygon([coordarray]),
      });
      var polygeometry = featureToAdd.getGeometry();
      this.source2.clear();
      this.source2.addFeatures([featureToAdd]);
    }

    for (var i = 0; i < pointsarray.length; i++) {
      if (polygeometry.intersectsCoordinate(pointsarray[i])) {
        ++temp;
        document.getElementById("points-amount").innerHTML = temp;
      }
    }
  };

  render() {
    return null;
  }
}

export const VectorLayerWithContext = (props) => {
  return (
    <MapContext.Consumer>
      {(mapContext) => {
        if (mapContext) {
          console.log(mapContext);
          return <VectorLayerComponent {...props} map={mapContext.map} />;
        }
      }}
    </MapContext.Consumer>
  );
};
