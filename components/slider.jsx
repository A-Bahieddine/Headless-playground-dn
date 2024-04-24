import styles from './grid.module.css';



// For use with withGrid
export const Slider = ({component}) => {
	console.log(component)
	return (
           <div className='Slider'>
			<h2>Slider Component</h2>
             	{component?.field_slide.map((slide) => (
                     <div key={slide.id}>

					 </div>
				))}
		   </div>
	); 
};

export default Slider;
