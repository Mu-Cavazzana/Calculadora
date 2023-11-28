import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  videoUrl : any = "https://www.youtube.com/embed/K7ghUiXLef8?si=hfRa65vN4wu0Dwx5";
  constructor(private sanitizer: DomSanitizer) {}

  showVideo(video: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  ngOnInit() {
  }

}
