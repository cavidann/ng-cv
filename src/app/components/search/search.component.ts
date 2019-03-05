import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentfulService } from 'src/app/services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchedWorks: Entry<any>[] = [];
  searchedOtherWorks: Entry<any>[] = [];
  keyWord = this.route.snapshot.paramMap.get('work');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) { this.search(); }

  ngOnInit() {
    this.search();
  }

  goToWorkDetailPage(linkTpye, workId) {
    this.router.navigate(['/details', linkTpye, workId, 1]);
  }

  search() {
    this.router.navigate(['/search', this.keyWord, '1']);
    this.contentfulService.getWorks()
    .then(works => {
      const keyWord = this.keyWord;
      this.searchedWorks = works.filter(function(item) {
          return JSON.stringify(item).toLowerCase().includes(keyWord);
        });
      });

    this.contentfulService.getOtherWorks()
    .then(works => {
      const keyWord = this.keyWord;
      this.searchedOtherWorks = works.filter(function(item) {
          return JSON.stringify(item).toLowerCase().includes(keyWord);
        });
      });

  }
}
