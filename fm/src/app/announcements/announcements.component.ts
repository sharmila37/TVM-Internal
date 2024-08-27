import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnouncementService } from '../announcement.service';
import { Announcement } from '../announcement.model';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  
  

  announcements: Announcement[] = [];
  announcementForm!: FormGroup;
  isAnnouncementFormVisible = false;
  editMode = false;
  isSearchActive = false;
  isFilterPopupActive = false;
  searchTerm: string = '';
  selectedAnnouncementId: number | null = null;
  selectedAnnouncement: any;
  newComment: string = '';
  likedAnnouncements: Set<number> = new Set();

  constructor(
    private fb: FormBuilder,
    private announcementService: AnnouncementService
  ) {}

  ngOnInit(): void {
    this.announcementForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      message: ['', Validators.required],
      attachment: ['', [this.validateFile]],
      category: ['', Validators.required],
      expiry: ['', Validators.required],
      location: ['', Validators.required],
      commentsDisabled: [false],
      pinned: [false],
      notifyAll: [false],
      notifyOthers: ['']
    });

    this.loadAnnouncements();
  }

  loadAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe((data) => {
      this.announcements = data;
      console.log(this.announcements);
      
    });
  }

  addAnnouncement(): void {
    this.isAnnouncementFormVisible = true;
    this.editMode = false;
    this.announcementForm.reset(); // Reset the form before adding a new announcement
  }

  editAnnouncement(id: number): void {
    this.announcementService.getAnnouncementById(id).subscribe((announcement) => {
      this.selectedAnnouncementId = id;
      this.announcementForm.patchValue(announcement);
      this.isAnnouncementFormVisible = true;
      this.editMode = true;
    });
  }

  submitAnnouncement(): void {
    if (this.announcementForm.valid) {
      const announcement = this.announcementForm.value;

      if (this.editMode && this.selectedAnnouncementId) {
        announcement.id = this.selectedAnnouncementId;
        this.announcementService.updateAnnouncement(announcement).subscribe(() => {
          this.loadAnnouncements();
          this.hideAnnouncementForm();
        });
      } else {
        this.announcementService.addAnnouncement(announcement).subscribe(() => {
          this.loadAnnouncements();
          this.hideAnnouncementForm();
        });
      }
    } else {
      this.announcementForm.markAllAsTouched(); // Highlight all fields with errors
    }
  }

  hideAnnouncementForm(): void {
    this.isAnnouncementFormVisible = false;
    this.editMode = false;
    this.selectedAnnouncementId = null;
  }

  toggleSearch(): void {
    this.isSearchActive = !this.isSearchActive;
  }

  toggleFilterPopup(): void {
    this.isFilterPopupActive = !this.isFilterPopupActive;
  }

  applyFilter(): void {
    // Add filter logic here
  }

  resetFilter(): void {
    // Reset filter logic
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      this.announcementForm.patchValue({
        attachment: selectedFile.name // Or handle file upload logic here
      });
    }
  }

  validateFile(control: any): { [key: string]: boolean } | null {
    const file = control.value;
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        return { invalidFileType: true };
      }
    }
    return null;
  }

  showPopup(announcement: any) {
    this.selectedAnnouncement = announcement;
  }
  
  closePopup() {
    this.selectedAnnouncement = null;
  }

  deleteAnnouncement(id: number | undefined): void {
    if (id === undefined) {
      console.error("Announcement ID is undefined");
      return;
    }
    this.announcementService.deleteAnnouncement(id).subscribe(() => {
      this.loadAnnouncements();
    });
  }
  
  likeAnnouncement(announcement: any): void {
    const announcementId = announcement.id; // Make sure the `id` is defined in the announcement object
    if (this.likedAnnouncements.has(announcementId)) {
      this.likedAnnouncements.delete(announcementId);
      announcement.likes--;
    } else {
      this.likedAnnouncements.add(announcementId);
      announcement.likes++;
    }
  }

  addComment(): void {
    if (this.newComment.trim()) {
      if (!this.selectedAnnouncement.comments) {
        this.selectedAnnouncement.comments = [];
      }
      this.selectedAnnouncement.comments.push(this.newComment);
      this.newComment = '';
    }
  }
}