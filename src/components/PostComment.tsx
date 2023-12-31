'use client';

import { Comment, CommentVote, User } from '@prisma/client';
import { useRef } from 'react';
import UserAvatar from './UserAvatar';
import { formatTimeToNow } from '@/lib/utils';
import CommentVotes from '@/components/CommentVotes';
type ExtendedComment = Comment & {
  votes: CommentVote[];
  author: User;
};

interface PostCommentProps {
  comment: ExtendedComment;
  votesAmt: number;
  currentVote: CommentVote | undefined;
  postId: string;
}

const PostComment: React.FC<PostCommentProps> = ({
  comment,
  votesAmt,
  currentVote,
  postId,
}) => {
  const commentRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={commentRef} className='flex flex-col '>
      <div className='flex items-center'>
        <UserAvatar
          user={{
            name: comment.author.name || null,
            image: comment.author.image || null,
          }}
          className='w-6 h-6'
        />
        <div className='ml-2 flex items-center gap-x-2'>
          <p className='text-sm font-medium text-gray-900'>
            u/{comment.author.username}
          </p>
          <p className='max-h-40 truncate text-xs text-zinc-500'>
            {formatTimeToNow(new Date(comment.createdAt))}
          </p>
        </div>
      </div>
      <p className='text-sm text-zinc-900 mt-2'>{comment.text}</p>

      <div className='flex gap-2 items-center'>
        <CommentVotes
          commentId={comment.id}
          initialVotesAmt={votesAmt}
          initialVote={currentVote}
        />
      </div>
    </div>
  );
};

export default PostComment;
