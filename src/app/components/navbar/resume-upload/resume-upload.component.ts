import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.scss'],
})
export class ResumeUploadComponent {
  selectedFile: File | null = null;
  uploadStatus: { success?: boolean; error?: string } = { success: false, error: ''};
  currentURL: string | null = '';
  isResumeUploadPage: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    console.log("Resume upload component");
  }

  ngOnInit(){
    this.currentURL = this.router.url;
    console.log(this.currentURL);
    if(this.currentURL == '/resumeupload'){
      this.isResumeUploadPage = true;
    }
  }

  // Handle file input change
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  // Handle form submission and file upload
  onSubmit(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      // this.resumeService.uploadResume(formData).subscribe(
      //   (response) => {
      //     this.uploadStatus = { success: true };
      //     console.log('Upload success:', response);
      //   },
      //   (error) => {
      //     this.uploadStatus = { error: 'There was an issue uploading your resume.' };
      //     console.error('Upload error:', error);
      //   }
      // );
    }
  }
}
