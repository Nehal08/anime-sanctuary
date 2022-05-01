import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  closeModal = '';
  id: any;
  episodes: any;
  up:boolean[]=[]
  episode: any;

  constructor(private animeService: AnimeService, private route: ActivatedRoute,private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')

    this.animeService.getAnimeEpisodes(this.id).subscribe(data => {
      let obj: any = data
      this.episodes = obj.data
      let len = this.episodes.length     
      this.up = new Array(len).fill(true);
    })
  }

  open(content: any,episodeId: number) {

    this.animeService.getAnimeEpisodeById(this.id,episodeId).subscribe((data) => {
      let obj: any = data;
      this.episode= obj.data;

      if(this.episode.synopsis)
        this.episode.synopsis = this.episode.synopsis.split('(')[0]


    },(error) => {
      this.modalService.dismissAll()
      this.router.navigate(['**'])
    })

    this.modalService.open(content, { centered: true, size: 'lg' }).result.then((result) => {
      this.closeModal = `Closed with: ${result}`;
    }, (reason) => {
      this.closeModal = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}