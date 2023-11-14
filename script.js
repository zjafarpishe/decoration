// Handles loading the events for <model-viewer>'s slotted progress bar
// const onProgress = (event) => {
//   const progressBar = event.target.querySelector('.progress-bar');
//   const updatingBar = event.target.querySelector('.update-bar');
//   updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
//   if (event.detail.totalProgress === 1) {
//     progressBar.classList.add('hide');
//     event.target.removeEventListener('progress', onProgress);
//   } else {
//     progressBar.classList.remove('hide');
//   }
// };
// document.querySelector('model-viewer').addEventListener('progress', onProgress);


const material = [
  {
    name: 'curtain',
    color: ['#614c31', '#f5f1e7', '#415f8a'],
    texture: ["./assets/textures/top-view-felt-fabric-texture.jpg", "./assets/textures/flower-pattern-curtain-background-pink.jpg", "./assets/textures/top-view-felt-fabric-texture.jpg"]
  },

  {
    name: 'floor',
    color: ['#acacac', '#ffffff',],
    texture: ["./assets/textures/moket.jpg", "./assets/textures/Birch_Wood_Flooring__English_baseColor.png", "./assets/textures/melo.jpg"]
  },

  {
    name: 'wall',
    color: ['#919e91', '#cdd9ff', '#fff'],
    texture: ["./assets/textures/flower-pattern-curtain-background-pink.jpg", "./assets/textures/wallpapergreen.jpg", "./assets/textures/patine.jpg"]
  },

  {
    name: 'picture',
    color: ['#fff'],
    texture: ["./assets/textures/ghab.jpg", "./assets/textures/greenghab.jpg", "./assets/textures/purpleflower.jpg"]
  },
  {
    name: 'chandelier',
    color: ['#747c31', '#f0dbcc', '#3e5f7e'],
    texture: []
  },
  {
    name: 'Carpet',
    color: ['#fff', '#babdbe',],
    texture: ["./assets/textures/Material.021_baseColor.png", "./assets/textures/top-view-felt-fabric-texture.jpg",]
  },
  {
    name: 'accessory',
    color: ['#744c31', '#696564', '#f5f1e7'],
    texture: []
  },
  {
    name: 'sofa',
    color: ['#967777', '#979797', '#587688', "#738875","#fff"],
    texture: ["./assets/textures/moket.jpg", "./assets/textures/baft1.jpg", "./assets/textures/baft2.jpg", "./assets/textures/flowerbaft1.jpg"]
  },
  {
    name: 'backChar',
    color: ['#fafafa', '#c9c9c9', '#bda48b'],
    texture: ["./assets/textures/chob.jpg", "./assets/textures/graychob.jpg", "./assets/textures/Material.002_baseColor.png",]
  },
  {
    name: 'chair',
    color: ['#744031', '#738875', '#56759b'],
    texture: ["./assets/textures/Fabric.002_baseColor.png", "./assets/textures/baft2.jpg",]
  },

  {
    name: 'table',
    color: ['#8a7474', '#cab6a4', '#fff'],
    texture: ["./assets/textures/desk.jpg", "./assets/textures/wood1.jpg", "./assets/textures/moket.jpg", "./assets/textures/hasir.jpg"]
  },
]

let object, viewer, BoxColor = false, BoxTexture = false,Home
const allMesh = document.getElementById('meshName')

const Texture = document.getElementById('Texture')
document.addEventListener("DOMContentLoaded", function () {
  // Get the model-viewer element
  viewer = document.getElementById("helmet");
  Home = document.getElementById("home");

  // Wait for the model to load
  viewer.addEventListener("model-visibility", function (e) {
    if (e.detail.visible) {

    }
  });
  Home.addEventListener("model-visibility", function (e) {
    if (e.detail.visible) {

    }
  });

});



const ShowColor = () => {
  BoxColor = !BoxColor
}

const ShowTexture = () => {
  BoxTexture = !BoxTexture
}




const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('.colors');
const image2 = slider.querySelectorAll('.colors2');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const prevButton2 = document.getElementById('prevButton2');
const nextButton2 = document.getElementById('nextButton2');

// Initialize the current slide index
let ColorcurrentSlide = 0;
let TexturecurrentSlide = 0;

// Function to show the current slide
function ColorshowSlide() {
  // Hide all images
  images.forEach(image => {
    image.style.display = 'none';
  });

  // Show the current slide
  images[ColorcurrentSlide].style.display = 'block';
}


function TextureshowSlide() {

  if (image2.length == 0) return
  // Hide all images
  image2.forEach(image => {
    image.style.display = 'none';
  });
  // Show the current slide
  image2[TexturecurrentSlide].style.display = 'block';
}

// Function to go to the previous slide
function goToPrevSlide() {
  ColorcurrentSlide--;
  if (ColorcurrentSlide < 0) {
    ColorcurrentSlide = images.length - 1;
  }
  ColorshowSlide();
}

// Function to go to the next slide
function goToNextSlide() {
  ColorcurrentSlide++;
  if (ColorcurrentSlide >= images.length) {
    ColorcurrentSlide = 0;
  }
  ColorshowSlide();
}






function goToPrevSlide2() {
  TexturecurrentSlide--;
  if (TexturecurrentSlide < 0) {
    TexturecurrentSlide = images.length - 1;
  }
  TextureshowSlide();
}

// Function to go to the next slide
function goToNextSlide2() {
  TexturecurrentSlide++;
  if (TexturecurrentSlide >= images.length) {
    TexturecurrentSlide = 0;
  }
  TextureshowSlide();
}
// Attach click event listeners to the previous and next buttons
prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);
prevButton2.addEventListener('click', goToPrevSlide2);
nextButton2.addEventListener('click', goToNextSlide2);

// Show the initial slide




const changeMaterial = (name, layer, event) => {
  console.log(event.target.tagName)
  event.stopPropagation()
  for (let index = 0; index < document.querySelectorAll('.card__title').length; index++) {
    document.querySelectorAll('.card__title')[index].style.borderColor = '#acacac'
    console.log(document.querySelectorAll('.card__title')[index].style)

  }
  if (event.target.tagName == 'IMG') {
    event.target.parentElement.style.borderColor = "#000"
  }
  if (event.target.tagName == 'SPAN') {
    event.target.parentElement.style.borderColor = "#000"
  }
  else
    if (event.target.tagName == 'H5') {
      event.target.style.borderColor = "#000"
    }


  if (document.getElementById("Color").children.length > 0) {
    const length = document.getElementById("Color").children.length
    for (let index = 0; index < length; index++) {
      document.getElementById("Color").removeChild(document.getElementById("Color").children[document.getElementById("Color").children.length - 1])

    }
  }

  if (document.getElementById("Texture").children.length > 0) {
    const length = document.getElementById("Texture").children.length
    for (let index = 0; index < length; index++) {
      console.log(document.getElementById("Texture").children[index])
      document.getElementById("Texture").removeChild(document.getElementById("Texture").children[document.getElementById("Texture").children.length - 1])


    }
  }

  if (document.getElementById("ColorPc").children.length > 0) {
    const length = document.getElementById("ColorPc").children.length
    for (let index = 0; index < length; index++) {
      document.getElementById("ColorPc").removeChild(document.getElementById("ColorPc").children[document.getElementById("ColorPc").children.length - 1])

    }
  }

  if (document.getElementById("TexturePc").children.length > 0) {
    const length = document.getElementById("TexturePc").children.length
    for (let index = 0; index < length; index++) {
      document.getElementById("TexturePc").removeChild(document.getElementById("TexturePc").children[document.getElementById("TexturePc").children.length - 1])

    }
  }
  // console.log(document.getElementById("Color").children)
  //     document.getElementById("Color").children.map(color => {
  //     })
  //   }

  material.map(item => {
    if (window.innerWidth < 769) {
      document.getElementById("Material").style.display = "block"
      console.log(1)
      if (item.name == name) {
        item.color.map(colors => {
          console.log("color", colors)
          const color = document.createElement('div')
          color.className = "color"
          color.style.background = colors
          document.getElementById('Color').appendChild(color)
          color.addEventListener("click", (e) => {
            viewer.model.materials.map((item) => {
              if (item.name == layer) {
                item.pbrMetallicRoughness.setBaseColorFactor(e.target.style.background)
                return
              }
            })

          }, false)
        })

        item.texture.map(textures => {
          const textur = document.createElement('img')
          textur.className = "color"
          textur.src = textures
          document.getElementById('Texture').appendChild(textur)


          textur.addEventListener("click", async (e) => {

            const texture = await viewer.createTexture(e.target.src);
            viewer.model.materials.map((item) => {
              if (item.name == layer) {
                item.pbrMetallicRoughness.baseColorTexture.setTexture(texture);
              }
            }, false)
          })

        })
      }
    }
    else {
      if (item.name == name) {
        item.color.map(colors => {
          const colorPC = document.createElement('div')
          colorPC.className = "color"
          colorPC.style.background = colors
          document.getElementById('ColorPc').appendChild(colorPC)
          colorPC.addEventListener("click", (e) => {
            Home.model.materials.map((item) => {
              if (item.name == layer) {
                item.pbrMetallicRoughness.setBaseColorFactor(e.target.style.background)
                return
              }
            })

          }, false)
        })

        item.texture.map(textures => {
          const textur = document.createElement('img')
          textur.className = "color"
          textur.src = textures
          document.getElementById('TexturePc').appendChild(textur)


          textur.addEventListener("click", async (e) => {

            const texture = await Home.createTexture(e.target.src);
            Home.model.materials.map((item) => {
              if (item.name == layer) {
                item.pbrMetallicRoughness.baseColorTexture.setTexture(texture);
              }
            }, false)
          })

        })
      }
    }

  })

}