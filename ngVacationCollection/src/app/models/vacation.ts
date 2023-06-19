export class Vacation {
  id: number;
  country: string;
  province: string;
  imageUrl: string;
  description: string;
  name: string;

constructor(
  id: number = 0,
  country: string = "",
  province: string ="",
  imageUrl: string ="",
  description: string = "",
  name: string = "" ){
    this.id = id;
    this.country = country;
    this.province = province;
    this.imageUrl = imageUrl;
    this.description = description;
    this.name = name;
  }

}
