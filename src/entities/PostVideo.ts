import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { PostDetail } from "./PostDetail";

@Entity("post_videos")
export class PostVideo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  post_detail_id!: number;

  @Column()
  post_video_file!: string;

  @ManyToOne(() => PostDetail, (postDetail) => postDetail.videos)
  @JoinColumn({ name: "post_detail_id" })
  postDetail!: PostDetail;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}