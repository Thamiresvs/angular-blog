import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataMock } from '../../data/dataMock';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  @Input()
  photoCover: string = "https://cdn.blog.estrategiavestibulares.com.br/vestibulares/wp-content/uploads/2022/01/redacao-marvel.jpg";
  @Input()
  contentTitle: string = "";
  @Input()
  contentDescription: string = "";
  private id: string | null = "0";

  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( obj =>
      this.id = obj.get("id")
      )

      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataMock.filter(article => article.id == id )[0]

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;

  }
}
