import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentfulService } from 'src/app/services/contentful.service';
import { Entry } from 'contentful';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  persons: Entry<any>[];
  allWorks;
  searchedWorks = '';
  profileImgs: Entry<any>[] = [];
  opened: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    this.getChosenSpeciality('skills');
    this.getAllWorks();
    this.contentfulService.getProfileImgs()
    .then(profileImgs => this.profileImgs = profileImgs);

    this.opened = true;
  }

  getChosenSpeciality(chosenSpeciality?: String) {
    this.contentfulService.getPersons()
    .then(persons => {
      this.persons = persons;
      this.persons = this.persons.filter((person) => person.fields.title === chosenSpeciality);
    });
  }

  getAllWorks() {
    this.contentfulService.getWorks()
    .then(works => {
        this.allWorks = works;
      });
  }

  isHidden() {
    return this.router.url.includes('search');
  }

  search(searchForm: NgForm) {
  this.opened = false;
  this.router.navigate(['/search', this.searchedWorks, '1']);
  }

  isActive(activated, current) {
    return activated === current;
  }

  isMenuOpen() {
    this.opened = !this.opened;
  }

}
