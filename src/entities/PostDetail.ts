import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { PostType } from "./PostType";
import { PostPhoto } from "./PostPhoto";
import { PostPdf } from "./PostPdf";
import { PostVideo } from "./PostVideo";

@Entity("post_details")
export class PostDetail {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  post_type_id!: number;

  @Column({ type: "date" })
  date!: Date;

  @Column()
  title_name!: string;

  @Column()
  topic_name!: string;

  @Column({ type: "text" })
  details!: string;

  @ManyToOne(() => PostType, (postType) => postType.postDetails)
  @JoinColumn({ name: "post_type_id" })
  postType!: PostType;

  @OneToMany(() => PostPhoto, (photo) => photo.postDetail)
  photos!: PostPhoto[];

  @OneToMany(() => PostPdf, (pdf) => pdf.postDetail)
  pdfs!: PostPdf[];

  @OneToMany(() => PostVideo, (video) => video.postDetail)
  videos!: PostVideo[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}