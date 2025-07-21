import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { PostDetail } from "./PostDetail";

@Entity("post_types")
export class PostType {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type_name!: string;

  @OneToMany(() => PostDetail, (postDetail) => postDetail.postType)
  postDetails!: PostDetail[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}