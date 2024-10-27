import type { Struct, Schema } from '@strapi/strapi';

export interface Sliding2Sliding2 extends Struct.ComponentSchema {
  collectionName: 'components_sliding2_sliding2s';
  info: {
    displayName: 'sliding2';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface Sliding1Sliding1 extends Struct.ComponentSchema {
  collectionName: 'components_sliding1_sliding1s';
  info: {
    displayName: 'sliding1';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    tablet: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    phone: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CodySolutionSolution extends Struct.ComponentSchema {
  collectionName: 'components_cody_solution_solutions';
  info: {
    displayName: 'solution';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
  };
}

export interface CodyPlatformPlatform extends Struct.ComponentSchema {
  collectionName: 'components_cody_platform_platforms';
  info: {
    displayName: 'platform';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Schema.Attribute.RichText;
  };
}

export interface CodyFeatureFeature extends Struct.ComponentSchema {
  collectionName: 'components_cody_feature_features';
  info: {
    displayName: 'feature';
    description: '';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    feature: Schema.Attribute.String;
  };
}

export interface CodyEventEvent extends Struct.ComponentSchema {
  collectionName: 'components_cody_event_events';
  info: {
    displayName: 'event';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CodyCommentComment extends Struct.ComponentSchema {
  collectionName: 'components_cody_comment_comments';
  info: {
    displayName: 'comment';
  };
  attributes: {
    name: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CareerTsukTsuk extends Struct.ComponentSchema {
  collectionName: 'components_career_tsuk_tsuks';
  info: {
    displayName: 'tsuk';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Schema.Attribute.String;
  };
}

export interface CareerTeamTeam extends Struct.ComponentSchema {
  collectionName: 'components_career_team_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    name: Schema.Attribute.String;
    profile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    major: Schema.Attribute.String;
    division: Schema.Attribute.String;
  };
}

export interface CareerReasonReason extends Struct.ComponentSchema {
  collectionName: 'components_career_reason_reasons';
  info: {
    displayName: 'reason';
    description: '';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reason: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CareerOpenCareeropen extends Struct.ComponentSchema {
  collectionName: 'components_career_open_careeropens';
  info: {
    displayName: 'careeropen';
  };
  attributes: {
    title: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutStatisticStattistic extends Struct.ComponentSchema {
  collectionName: 'components_about_statistic_stattistics';
  info: {
    displayName: 'stattistic';
  };
  attributes: {
    web: Schema.Attribute.Integer;
    user: Schema.Attribute.Integer;
    partner: Schema.Attribute.Integer;
    feature: Schema.Attribute.Integer;
    product: Schema.Attribute.Integer;
    brand: Schema.Attribute.Integer;
  };
}

export interface AboutServiceService extends Struct.ComponentSchema {
  collectionName: 'components_about_service_services';
  info: {
    displayName: 'service';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface AboutAboutusAboutus extends Struct.ComponentSchema {
  collectionName: 'components_about_aboutus_aboutuses';
  info: {
    displayName: 'aboutus';
  };
  attributes: {
    aboutus: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sliding2.sliding2': Sliding2Sliding2;
      'sliding1.sliding1': Sliding1Sliding1;
      'cody-solution.solution': CodySolutionSolution;
      'cody-platform.platform': CodyPlatformPlatform;
      'cody-feature.feature': CodyFeatureFeature;
      'cody-event.event': CodyEventEvent;
      'cody-comment.comment': CodyCommentComment;
      'career-tsuk.tsuk': CareerTsukTsuk;
      'career-team.team': CareerTeamTeam;
      'career-reason.reason': CareerReasonReason;
      'career-open.careeropen': CareerOpenCareeropen;
      'about-statistic.stattistic': AboutStatisticStattistic;
      'about-service.service': AboutServiceService;
      'about-aboutus.aboutus': AboutAboutusAboutus;
    }
  }
}
