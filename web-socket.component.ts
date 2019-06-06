import { Component, OnInit } from '@angular/core';
import { SockService } from '../sock.service';
import { FormsModule } from '@angular/forms';

SockService
@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.scss']
})
export class WebSocketComponent implements OnInit {

  constructor(private wb:SockService) { }

  ngOnInit() {

     // 订阅了服务器发送过来的消息，并把消息打印在控制台上
     this.wb.createObservableSocket("ws://192.168.31.145:1024")
     .subscribe(
       //data => console.log("如果有数据="+data),
       data => this.heroes.push(("如果有数据="+data)),
       err => console.log("如果无数据="+err),
       () => console.log("流已经结束")
     );
    
  }
  heroes = ['Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.wb.sendMessage(newHero);
      this.heroes.push("我说了："+newHero);
    }
  }

  setemg(aaa:any){
    this.wb.sendMessage(aaa);
  }
}
