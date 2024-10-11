function call(cities) {
  class Town {
    constructor(town, latitude, longitude) {
      this.town = town;
      this.latitude = latitude;
      this.longitude = longitude;
    }

    print() {
      console.log(
        new Object({
          town: this.town,
          latitude: Number.parseFloat(this.latitude).toFixed(2),
          longitude: Number.parseFloat(this.longitude).toFixed(2),
        })
      );
    }
  }

  cities
    .map((city) => {
      const [town, latitude, longitude] = city.split(" | ");
      return new Town(town, latitude, longitude);
    })
    .forEach((o) => o.print());
}

call(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
call(["Plovdiv | 136.45 | 812.575"]);
