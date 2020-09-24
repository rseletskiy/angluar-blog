import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  createPostForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.createPostForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required)
    })
  }

  submit(){

    if(this.createPostForm.invalid)
        return

    const post: Post = {
      title: this.createPostForm.value.title,
      text: this.createPostForm.value.text,
      author: this.createPostForm.value.author,
      date: new Date()
    }
    console.log(post);
    

  }

}
