import Image from 'next/image';
import { IMAGE_URL } from '../../../lib/constants';
export const TalkingDots = ({ component }) => {
    const leftDots = component.field_talking_left_dots.field_media_image.uri.url;
    const rightDots = component.field_talking_right_dots.field_media_image.uri.url;
    return (
        <div className="wrapper">
            <div class="talking-right-dots d-lg-block d-none">
                <Image src={IMAGE_URL + rightDots} width={230} height={817} />
            </div>
            <div class="talking-left-dots d-lg-block d-none">
                <Image src={IMAGE_URL + leftDots} width={214} height={997} />
            </div>
        </div>
    );
};

export default TalkingDots;
