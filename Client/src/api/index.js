async function sendImage(imageData) {
  console.log(imageData);
  const formData = new FormData();
  formData.append("image", imageData);

  const base64String = imageData.imgURL.split(",")[1];
  const binaryString = atob(base64String);

  const buffer = new ArrayBuffer(binaryString.length);
  const bufferView = new Uint8Array(buffer);
  for (let i = 0; i < binaryString.length; i++) {
    bufferView[i] = binaryString.charCodeAt(i);
  }

//

  try {
    const response = await fetch("https://shielded-savannah-03474-2136069c7f29.herokuapp.com", {
      method: "POST",
      headers: {
        "Content-Type": "image/jpeg",
      },
      body: buffer,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const res = await response.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

//

async function getDatabase(){
  try {
    try {
      const response = await fetch("https://shielded-savannah-03474-2136069c7f29.herokuapp.com/database");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const res = await response.json();
      return res;
    } catch (err) {
      console.log(err);
    }
  }catch(error){
    console.log(error);
  }
}

export { sendImage, getDatabase };
