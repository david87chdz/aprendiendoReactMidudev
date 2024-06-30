// @ts-check
import { test, expect } from '@playwright/test';

//Definimos la URL de nuestro proyecto
const LOCALHOST_URL = 'http://localhost:5173'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

//Damos un título a nuestro test
test('app shows random fact and image', async ({ page }) => {
  //Le damos la ruta de nuestro proyecto
  await page.goto(LOCALHOST_URL);

  //Empezamos a decirle que queremos que haga
  //Aquí le pedimos que nos encuentre el parrafo <p></p>
  const text = await page.getByRole('paragraph');

  //Aquí le pedimos que nos encuentre la imagen
  const image = await page.getByRole('img');

  //Aquí le pedimos que nos de el texto del parrafo
  const textContent = await text.textContent();

  //Aquí le pedimos que nos de la URL de la imagen
  const imgSrc = await image.getAttribute('src');


  //Aquí le decimos que esperamos que el texto del parrafo no sea vacío
  await expect(textContent).not.toBe('');
  //otra forma de hacerlo
  //expect(textContent?.length).toBeGreaterThan(0);

  //Aquí le decimos que esperamos que la URL de la imagen no sea vacía
  //otra forma de hacerlo
  await expect(imgSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBe(true);
  //await expect(imgSrc).not.toBe('');
});


