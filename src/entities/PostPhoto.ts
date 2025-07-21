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

@Entity("post_photos")
export class PostPhoto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  post_detail_id!: number;

  @Column()
  post_photo_file!: string;

  @Column()
  post_photo_status!: string;

  @ManyToOne(() => PostDetail, (postDetail) => postDetail.photos)
  @JoinColumn({ name: "post_detail_id" })
  postDetail!: PostDetail;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}