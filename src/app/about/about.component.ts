import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ownerName = 'Slivchuk Illya';
  date = '17 June 2001';
  city = 'Rivne';
  education = 'NVK 2(2017-2019),NVK 12(2009-2017)';
  professionAttainments = 'NET.Framework,HTML5/CSS,JS,C++,C#,Windows Forms,WPF,SQL Server,ADO.NET,Http,JQuery';
  knowingLanguages = 'Ukrainian,English,German';
  res = ['Slivchuk Illya','17 June 2001','Rivne','NVK 2(2017-2019),NVK 12(2009-2017)',
  'NET.Framework,HTML5/CSS,JS,C++,C#,Windows Forms,WPF,SQL Server,ADO.NET,Http,JQuery','Ukrainian,English,German']
  constructor() { }

  ngOnInit() {
  }

}
