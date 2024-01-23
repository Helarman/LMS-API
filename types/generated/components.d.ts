import type { Schema, Attribute } from '@strapi/strapi';

export interface EducationExamination extends Schema.Component {
  collectionName: 'components_education_examinations';
  info: {
    displayName: 'Examination';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface EducationLesson extends Schema.Component {
  collectionName: 'components_education_lessons';
  info: {
    displayName: 'Lesson';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
  };
}

export interface ExaminationsFile extends Schema.Component {
  collectionName: 'components_examinations_files';
  info: {
    displayName: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['pdf', 'text', 'video', 'audio']> &
      Attribute.Required;
    maxCount: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<5>;
  };
}

export interface ExaminationsTestAnswer extends Schema.Component {
  collectionName: 'components_examinations_test_answers';
  info: {
    displayName: 'TestAnswer';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    isRight: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ExaminationsTestItem extends Schema.Component {
  collectionName: 'components_examinations_test_items';
  info: {
    displayName: 'TestItem';
    description: '';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    count: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>;
    answerType: Attribute.Enumeration<['select', 'detailed']>;
    image: Attribute.Media;
    answers: Attribute.Component<'examinations.test-answer', true>;
  };
}

export interface ExaminationsTest extends Schema.Component {
  collectionName: 'components_examinations_tests';
  info: {
    displayName: 'Test';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    questions: Attribute.Component<'examinations.test-item', true>;
  };
}

export interface LessonsAudio extends Schema.Component {
  collectionName: 'components_lessons_audio';
  info: {
    displayName: 'Audio';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    file: Attribute.Media & Attribute.Required;
  };
}

export interface LessonsText extends Schema.Component {
  collectionName: 'components_lessons_texts';
  info: {
    displayName: 'Text';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface LessonsVideo extends Schema.Component {
  collectionName: 'components_lessons_videos';
  info: {
    displayName: 'video';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    file: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'education.examination': EducationExamination;
      'education.lesson': EducationLesson;
      'examinations.file': ExaminationsFile;
      'examinations.test-answer': ExaminationsTestAnswer;
      'examinations.test-item': ExaminationsTestItem;
      'examinations.test': ExaminationsTest;
      'lessons.audio': LessonsAudio;
      'lessons.text': LessonsText;
      'lessons.video': LessonsVideo;
    }
  }
}
