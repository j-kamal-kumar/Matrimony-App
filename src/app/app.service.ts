import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  selectedProfile: any = {};
  pendingCounts = 0;
  interestedCounts = 0;
  rejectedCounts = 0;
  shortListedCounts = 0;
  constructor() { 
  }

  setProfileList() {
    let profiles = [
      {
        Id: 1,
        Code: "M01",
        FirstName: "Rakesh",
        LastName: "K",
        Gender: "Male",
        Age: "32",
        Religion: "XX",
        Category: "YY",
        City: "Chennai",
        State: "Tamil Nadu",
        Qualification: "MCA",
        About: "I am a groom looking for a life partner. I am currently working in Chennai and am looking for someone kind, caring, and family-oriented. I am a simple person with traditional values and a modern outlook. I enjoy listening to music, watching movies, and exploring new places in my free time.",
        Image: "./assets/images/001.PNG",
        Action: 0
      },
      {
        Id: 2,
        Code: "M02",
        FirstName: "Murali Kumar",
        LastName: "M",
        Gender: "Male",
        Age: "26",
        Religion: "XX",
        Category: "YY",
        City: "Bangalore",
        State: "Karnataka",
        Qualification: "B.Tech",
        About: "I'm glad you visited my profile. I work in the banking industry and have completed my Master's in Computer Applications. I am a simple, down-to-earth guy with a positive outlook on life. I enjoy reading books, listening to music, and playing sports in my free time. I value honesty, integrity, and respect in a relationship and am looking for a partner with similar values. Marriage is a journey of two individuals who come together to grow, learn, and support each other in every aspect of life. If we could be a good match, please contact me to know more.",
        Image: "./assets/images/002.PNG",
        Action: 0
      },
      {
        Id: 3,
        Code: "M03",
        FirstName: "Muthu Venkat",
        LastName: "V",
        Gender: "Male",
        Age: "28",
        Religion: "XX",
        Category: "YY",
        City: "Tirupati",
        State: "Andhra pradesh",
        Qualification: "MBA",
        About: "I am looking for an understanding, caring, and respectful life partner. I am a divorced person who has completed my degree and works in the government sector. I value honesty and loyalty in a relationship and believe in doing my best to make it work. I enjoy traveling, reading, and spending time with loved ones. I am seeking someone who is family-oriented, has a positive outlook toward life and is willing to stand by me through thick and thin. If you think we could be a good match, please feel free to get in touch.",
        Image: "./assets/images/003.PNG",
        Action: 0
      },
      {
        Id: 4,
        Code: "M04",
        FirstName: "Karthik",
        LastName: "R",
        Gender: "Male",
        Age: "30",
        Religion: "XX",
        Category: "YY",
        City: "Chennai",
        State: "Tamil Nadu",
        Qualification: "BE",
        About: "We are looking for a suitable match for our son, a well-educated and career-oriented individual. He has completed his master's degree and works in a reputed private company. He is a responsible and caring person who values family and relationships. He enjoys reading, traveling, and keeping himself physically fit. We are looking for a well-educated, independent bride and shares similar values. We believe in a progressive outlook towards life and look forward to welcoming a new member to our family who shares the same values.",
        Image: "./assets/images/004.PNG",
        Action: 0
      },
      {
        Id: 5,
        Code: "M05",
        FirstName: "Jeevan",
        LastName: "J",
        Gender: "Male",
        Age: "29",
        Religion: "XX",
        Category: "YY",
        City: "Thiruvananthapuram",
        State: "Kerala",
        Qualification: "MBBS",
        About: "Hi there! My name is Jeevan, and I'm a simple guy from Thiruvananthapuram. I am a Senior Software Test Engineer working with a multinational IT company. I value honesty, integrity, and hard work. I am looking for a life partner who shares similar values and beliefs. My interests include reading, traveling, and exploring new places. I am a foodie and love trying out different cuisines. In my free time, I enjoy playing badminton and watching movies. I am seeking an understanding, caring, and supportive life partner. Someone ambitious, independent, and passionate about their career. If you think we could be a good match, please feel free to reach out!",
        Image: "./assets/images/005.PNG",
        Action: 0
      },
      {
        Id: 6,
        Code: "M06",
        FirstName: "Mohammed Imran",
        LastName: "M",
        Gender: "Male",
        Age: "25",
        Religion: "XX",
        Category: "YY",
        City: "Bangalore",
        State: "Karnataka",
        Qualification: "B.sc",
        About: "Thank you for visiting my profile. I am Rahul Pillai, a caring, fun-loving person with a good sense of humor. I am a software engineer by profession, and I enjoy solving complex problems. My hobbies include traveling, playing sports, and watching movies. I am looking for a life partner who is caring, kind-hearted and has a good sense of humor. Marriage is a partnership of equals, and I am looking for someone with similar values. If you think we could be a good match, please feel free to contact me.",
        Image: "./assets/images/006.PNG",
        Action: 0
      },
      {
        Id: 7,
        Code: "M07",
        FirstName: "Vijay Nelson",
        LastName: "K",
        Gender: "Male",
        Age: "28",
        Religion: "XX",
        Category: "YY",
        City: "Chennai",
        State: "Tamil Nadu",
        Qualification: "B.com",
        About: "Hi, I am Vijay from Chennai. I am a vegetarian and fluent in Malayalam, my mother tongue. My father is a businessman, and my mother is a homemaker. I graduated from the College of Commerce and Economics with a Bachelor's degree in Business Administration (BBA), specializing in Finance and Marketing. I am a responsible, hardworking, and family-oriented person who values traditions and cultural beliefs. I enjoy reading, playing cricket, and spending time with family and friends in my free time.",
        Image: "./assets/images/007.PNG",
        Action: 0
      }      
    ];
    sessionStorage.setItem("profileList", JSON.stringify(profiles));
  }

  getProfilelist() {
    let temp:any = sessionStorage.getItem("profileList");
    return JSON.parse(temp);
  }

  selectProfile(value:any) {
    this.selectedProfile = value;
    sessionStorage.setItem("seletedProfile", value);
  }

  updateProfileList(value:any) {
    sessionStorage.setItem("profileList", JSON.stringify(value));
  }

}
