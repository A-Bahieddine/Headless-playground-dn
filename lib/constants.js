export const DRUPAL_URL = process.env.backendUrl;
export const IMAGE_URL = process.env.imageUrl || DRUPAL_URL;
export const BUILD_MODE =
	process.env.npm_lifecycle_script?.includes('next build');
export const PARAMS_PAGE =
	'include=field_components.field_slide,field_components.field_card,field_components.field_card.field_card_image.field_media_image,field_components.field_hero_img.field_media_image';
export const FRONT_PATH = '/homepage';
