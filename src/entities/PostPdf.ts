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

@Entity("post_pdfs")
export class PostPdf {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  post_detail_id!: number;

  @Column()
  post_pdf_file!: string;

  @ManyToOne(() => PostDetail, (postDetail) => postDetail.pdfs, {
    onDelete: "SET NULL",
    onUpdate: "RESTRICT"
  })
  @JoinColumn({ name: "post_detail_id" })
  postDetail!: PostDetail;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}