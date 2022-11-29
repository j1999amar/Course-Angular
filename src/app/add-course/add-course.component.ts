import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  name=""
  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

  readValue= () => {
   let values=[{
    "name":this.courseTitle,
    "Description":this.courseDescription,
    "Date":this.courseDate,
    "Duration":this.courseDuration,
   }]
   console.log(values)
  }
}
