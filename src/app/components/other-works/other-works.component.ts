import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-other-works',
  templateUrl: './other-works.component.html',
  styleUrls: ['./other-works.component.scss']
})
export class OtherWorksComponent implements OnInit {

  allWorks: Entry<any>[] = [];
  filteredWorks: Entry<any>[] = [];
  skipId: number;
  paginations;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    this.getAllWorks();
  }

  goToWorkDetailPage(linkTpye, workId) {
    this.router.navigate(['/details', linkTpye, workId, this.skipId]);
  }

  getAllWorks() {
    this.contentfulService.getOtherWorks()
    .then(works => {
        this.allWorks = works;
        const paginationCount = Math.ceil(this.allWorks.length / 6);
        this.paginations = Array(paginationCount).fill((x, i) => i);
        this.generatePaginationQuery();
      });
  }

  generatePaginationQuery() {
    this.filteredWorks = [];
    setTimeout(() => {
      this.skipId = +this.route.snapshot.paramMap.get('skip');
      let limit;
      let skipVal = ((this.allWorks.length - 6) - ( (this.skipId - 1) * 6 ));
      if (this.paginations.length > 1) {
        if (this.skipId <= this.paginations.length && this.skipId > 0) {

          if (((this.allWorks.length - 6) - ( (this.skipId - 1) * 6 )) < 0) {
            skipVal = 0;
            limit = this.allWorks.length % 6;
          } else {
            limit = 6;
          }

          if (this.allWorks.length > 0) {
            const query = {
              'sys': { 'type': 'Array' },
              'skip': skipVal,
              'limit': limit
            };

            this.contentfulService.getOtherWorks(query)
            .then(works => {
              this.filteredWorks = works;
            });
          } else {
            this.generatePaginationQuery();
          }

        } else {
          this.router.navigate(['/error']);
        }
      } else {
        console.log(this.paginations.length);
      }

    }, 200);
  }

}
