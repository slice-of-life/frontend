import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/data/post.service';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  sliceImage : File;
  postForm = this.fb.group({
    caption: [''],
    taskID : ['']
  });

  constructor(private fb: FormBuilder, private router :Router, private postService : PostService) { }

  ngOnInit(): void {
  }

  getErrorMessage(error : string){
    
  }
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
        this.sliceImage  = event.target.files[0];
    }
}

  submit() {
    this.postService.postCreatePost(this.postForm.get('taskID').value, this.postForm.get('caption').value, this.sliceImage)
    .subscribe({
      next: (response) => {
    }
  });
  }
}
