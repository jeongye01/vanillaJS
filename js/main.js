alert('hello');


function Song(title,writer,singer,released){
    this.title=title;
    this.writer=writer;
    this.singer=singer;
    this.released=released;
    console.log(this);
}

// 인스턴스
const song1=new Song("124");
//