window.SITE={
  name:"Fatima Noor",
  role:"Computer Science Graduate · AI/ML & Computer Vision",
  location:"Wah Cantt, Pakistan",
  phone:"+92 313 572 0271",
  email:"fatimanoorr39@gmail.com",
  github:"https://github.com/Fatimanoor123",
  linkedin:"https://www.linkedin.com/in/fatimanoorr/"
};

window.EXPERIENCE=[
  {company:"DevSimplex (Remote)",role:"Data Quality Engineer",dates:"May–July 2025",bullets:[
    "Implemented Python/SQL validation checks and data profiling.",
    "Set up quality metrics; explored dbt/Great Expectations for automation."
  ]},
  {company:"SkyFi Networks, Rawalpindi",role:"Python Developer",dates:"Aug 2024 – Mar 2025",bullets:[
    "Built and maintained Python apps; debugging, features, and optimization."
  ]},
  {company:"The Brilliance Pro",role:"Founder & Technical Content Manager",dates:"Jun 2022 – Jul 2024",bullets:[
    "Owned content strategy, SEO, and WordPress CMS operations."
  ]},
  {company:"CodoLogics, Islamabad",role:"Technical Writer",dates:"Mar 2022 – May 2022",bullets:[
    "Produced technical documents and SEO content."
  ]},
  {company:"NESCOM",role:"Application Developer Intern",dates:"Aug 2021 – Oct 2021",bullets:[
    "Contributed to web app development and documentation."
  ]}
];

window.SKILLS={
  "Languages":["Python","SQL"],
  "ML & CV":["YOLOv8","OpenCV","MediaPipe","Scikit-learn"],
  "Data Tools":["Pandas","NumPy","Matplotlib","Streamlit"],
  "Databases":["PostgreSQL","MongoDB"],
  "Platforms":["Apache Airflow","Git","GitHub"]
};

window.EDUCATION=[{school:"UET Taxila",degree:"BS Computer Science",dates:"2017–2021",details:"CGPA: 3.68/4.00"}];
window.LANGS=[{name:"Urdu",level:"Native"},{name:"English",level:"Fluent"}];

// Projects pulled from your GitHub profile (you can add images later)
window.PROJECTS=[
  {slug:"number-plate-detection",title:"License Plate Detection & OCR (YOLOv8 + EasyOCR)",yolo:"v8",
   tags:["computer-vision","object-detection","ocr","opencv"],badge:"🚗",
   summary:"Detect license plates and read text via EasyOCR; includes preprocessing for OCR quality.",
   metrics:[{k:"Model",v:"YOLOv8"},{k:"OCR",v:"EasyOCR"}],
   links:{code:"https://github.com/Fatimanoor123/Number-Plate-Detection"}},
  {slug:"weapon-detection",title:"Weapon Detection in Video (YOLO)",yolo:"v8",
   tags:["computer-vision","safety","object-detection"],badge:"🛡️",
   summary:"Real-time detection on video streams; saves annotated output video.",
   metrics:[{k:"Input",v:"Video"},{k:"Libs",v:"Ultralytics, OpenCV"}],
   links:{code:"https://github.com/Fatimanoor123/Weapon-Detection"}},
  {slug:"gear-detection",title:"PPE / Safety Gear Detection (YOLO)",yolo:"v8",
   tags:["computer-vision","safety","ppe"],badge:"🦺",
   summary:"Detects helmets, vests, gloves; built on YOLO + OpenCV with sample worker video.",
   metrics:[{k:"Use case",v:"Compliance"},{k:"Libs",v:"Ultralytics, OpenCV"}],
   links:{code:"https://github.com/Fatimanoor123/Gear-Detection"}},
  {slug:"hijab-detection",title:"Hijab Detection (YOLOv8)",yolo:"v8",
   tags:["computer-vision","classification","object-detection"],badge:"🧕",
   summary:"Frame-by-frame detection to identify hijab wearing; confidence scoring and resizing.",
   metrics:[{k:"Model",v:"YOLOv8"},{k:"Input",v:"Video"}],
   links:{code:"https://github.com/Fatimanoor123/Hijab-Detection"}},
  {slug:"gesture-recognition",title:"Hand Gesture Recognition (MediaPipe + OpenCV)",yolo:"",
   tags:["computer-vision","mediapipe","opencv"],badge:"🤟",
   summary:"Real-time webcam gestures: Thumbs Up, Peace, Open Palm with MediaPipe Hands.",
   metrics:[{k:"Input",v:"Webcam"},{k:"Libs",v:"MediaPipe, OpenCV"}],
   links:{code:"https://github.com/Fatimanoor123/Gesture-Recognition"}},
  {slug:"housing-eda",title:"Housing Data: Preprocessing & EDA",yolo:"",
   tags:["data-cleaning","eda","feature-engineering"],badge:"🏠",
   summary:"Imputation, correlation heatmaps, and setup for regression modeling on tabular data.",
   metrics:[{k:"Stack",v:"Pandas, sklearn, Seaborn"}],
   links:{code:"https://github.com/Fatimanoor123/Housing-Data-Preprocessing-and-EDA"}}
];
