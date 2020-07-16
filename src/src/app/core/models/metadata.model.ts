import { Title, Meta } from '@angular/platform-browser';
import { IMeta } from './interface/IMeta';
import { Injectable } from '@angular/core';

@Injectable()
export class MetaData {
  constructor(private title: Title, private meta: Meta) {}

  public alterTitle(title: string): void {
    this.title.setTitle(title);
  }

  public alterMetaData(meta: IMeta[]): void {
    meta.forEach((metaInfo) => {
      this.meta.updateTag({
        name: metaInfo.description,
        content: metaInfo.content,
      });
    });
  }
}
