import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
export const HelpfulDots = ({ component }) => {
    const leftDots = component.field_helpful_dots.field_media_image.uri.url;
    return (
        <div className="wrapper">
            <div class="helpful-resources-left-dots d-lg-block d-none">
                <Image src={IMAGE_URL + leftDots} width={214} height={997} />
            </div>
        </div>
    );
};

export default HelpfulDots;
