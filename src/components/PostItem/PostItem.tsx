import s from './PostItem.module.css';

interface Props {
  url: string;
    url_2x: string;
    alt: string;
  category: string;
  date: Date;
  description: string;
}

const PostItem = ({ url, url_2x, alt, category, date, description }: Props) => {
    return (
      <div>
        <img
          srcSet={`${url} 1x, ${url_2x} 2x`}
          src={url}
          alt={alt}
            />
            <div>
                <p>{category}</p>
                <p>{date.toLocaleDateString()}</p>
            </div>
            <h3>{description}</h3>
      </div>
    );
};

export default PostItem;
