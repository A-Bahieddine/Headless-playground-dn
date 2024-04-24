
import Image from "next/image";
import { IMAGE_URL } from "../lib/constants";
export const Hero = ({component}) => {
      const imgSrc = component?.field_image?.field_media_image?.uri?.url || '';
	return (
           <div className="component">
	     	<hr />
			<div > <Image src={IMAGE_URL + imgSrc} width="300" height="300" alt="image page" /></div>

			  <div
			  dangerouslySetInnerHTML={{ __html: component.field_hero_text.processed }}
			  >
			  </div>

			<hr /> 
	
		   </div>
	); 
};

export default Hero;