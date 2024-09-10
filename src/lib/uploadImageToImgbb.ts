export async function base64ToImageUrl(base64Image: string) {
  const apiKey = 'b77b18a20597d3763d304654c20b20bf';
  const base64Data = base64Image.replace(/^data:image\/[a-z]+;base64,/, '');

  const formData = new FormData();
  formData.append('image', base64Data);

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();

  if (result.success) {
    return result.data.url;
  } else {
    console.error(response)
    throw new Error('Falha ao fazer upload da imagem');
  }
}
