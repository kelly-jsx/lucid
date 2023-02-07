import { PostInput } from '~/components/shared/Feed/PostInput';
import { PostCard } from '~/components/shared/PostCard';

export const Feed = () => (
  <>
    <div className="flex flex-col">
      <PostInput />
      <PostCard
        displayName={'Ruby Morris'}
        nickname={'rubymorris'}
        textContent={'dupa'}
        imgUrl={'https://source.unsplash.com/random/800x800/?img=1'}
      />
      <PostCard displayName={'Henry Matherne'} nickname={'imhenry'} textContent={'i love this app! 😍'} />
    </div>
  </>
);
