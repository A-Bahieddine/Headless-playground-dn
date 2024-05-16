import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
export const BiosimilarDots = ({ component }) => {
    const leftDots = component.field_biosimilar_left_dots.field_media_image.uri.url;
    const rightDots = component.field_biosimilar_right_dots.field_media_image.uri.url;
    return (
        <div className="wrapper">
            <div class="biosimilar-right-dots d-lg-block d-none">
            <Image src={IMAGE_URL + rightDots} width={280} height={997} />
            </div>
            <div class="biosimilar-left-dots d-lg-block d-none">
            <Image src={IMAGE_URL + leftDots} width={214} height={997} />
            </div>
        </div>
    );
};

export default BiosimilarDots;
