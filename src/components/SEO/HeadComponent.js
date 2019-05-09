import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export const HeadComponent = props => {
  const {
    title = null,
    description = null,
    keywords = null,
    geo_region = null,
    robots = null,
    item_prop_name = null,
    item_prop_description = null,
    twitter_card = null,
    twitter_site = null,
    twitter_title = null,
    twitter_description = null,
    twitter_creator = null,
    og_title = null,
    og_type = null,
    og_url = null,
    og_description = null,
    og_site_name = null,
    article_section = null,
    article_tag = null,
    fb_admins = null,
    item_prop_image = null,
    twitter_image = null,
    og_image = null,
    article_published_time = null,
    article_modified_time = null
  } = props.SEO;

  return (
    <Helmet>
      {
        //Dynamic meta tags and couple of DEFAULT but flexible
      }
      {title ? <title>{title}</title> : <title>TITLE TITLE</title>}
      {description ? (
        <meta name="description" content={description} />
      ) : (
        <meta name="description" content="DESCRIPTION DESCRIPTION" />
      )}
      {keywords ? (
        <meta name="keywords" content={keywords} />
      ) : (
        <meta name="keywords" content="KEYWORDS" />
      )}
      {geo_region ? (
        <meta name="geo.region" content={geo_region} />
      ) : (
        <meta name="geo.region" content="ISO:3166-2:GB" />
      )}
      {robots && <meta name="robots" content={robots} />}
      <meta name="Classification" content="Business" />
      {item_prop_name ? (
        <meta itemProp="name" content={item_prop_name} />
      ) : (
        <meta itemProp="name" content="TITLE TITLE" />
      )}
      {item_prop_description ? (
        <meta itemProp="description" content={item_prop_description} />
      ) : (
        <meta itemProp="description" content="DESCRIPTION DESCRIPTION" />
      )}

      {twitter_card && <meta name="twitter:card" content={twitter_card} />}
      {twitter_site && <meta name="twitter:site" content={twitter_site} />}
      {twitter_title ? (
        <meta name="twitter:title" content={twitter_title} />
      ) : (
        <meta name="twitter:title" content="TWITTER TITLE" />
      )}
      {twitter_description ? (
        <meta name="twitter:description" content={twitter_description} />
      ) : (
        <meta name="twitter:description" content="DESCRIPTION" />
      )}
      {twitter_creator ? (
        <meta name="twitter:creator" content={twitter_creator} />
      ) : (
        <meta name="twitter:creator" content="123123123" />
      )}

      {og_type ? (
        <meta property="og:type" content={og_type} />
      ) : (
        <meta name="og:type" content="website" />
      )}
      {og_title ? (
        <meta property="og:title" content={og_title} />
      ) : (
        <meta property="og:title" content="TITLE TITLE" />
      )}
      {og_url && <meta property="og:url" content={og_url} />}
      {og_description ? (
        <meta property="og:description" content={og_description} />
      ) : (
        <meta property="og:description" content="DESCRIPTION DESCRIPTION" />
      )}
      {og_site_name ? (
        <meta property="og:site_name" content={og_site_name} />
      ) : (
        <meta property="og:site_name" content="TITLE TITLE" />
      )}

      {article_published_time && (
        <meta
          property="article:published_time"
          content={article_published_time}
        />
      )}
      {article_modified_time && (
        <meta
          property="article:modified_time"
          content={article_modified_time}
        />
      )}
      {article_section && (
        <meta property="article:section" content={article_section} />
      )}
      {article_tag && <meta property="article:tag" content={article_tag} />}

      {fb_admins && <meta property="fb:admins" content={fb_admins} />}

      {item_prop_image ? (
        <meta itemProp="image" content={item_prop_image} />
      ) : (
        <meta itemProp="image" content="https://google.com 600x300" />
      )}
      {twitter_image ? (
        <meta name="twitter:image" content={twitter_image} />
      ) : (
        <meta name="twitter:image" content="https://google.com 600x300" />
      )}
      {og_image ? (
        <meta property="og:image" content={og_image} />
      ) : (
        <meta property="og:image" content="https://google.com 1200 x 630" />
      )}
    </Helmet>
  );
};

HeadComponent.propTypes = {
  SEO: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    geo_region: PropTypes.string,
    robots: PropTypes.string,
    item_prop_name: PropTypes.string,
    item_prop_description: PropTypes.string,
    twitter_card: PropTypes.string,
    twitter_site: PropTypes.string,
    twitter_title: PropTypes.string,
    twitter_description: PropTypes.string,
    twitter_creator: PropTypes.string,
    og_title: PropTypes.string,
    og_type: PropTypes.string,
    og_url: PropTypes.string,
    og_description: PropTypes.string,
    og_site_name: PropTypes.string,
    article_section: PropTypes.string,
    article_tag: PropTypes.string,
    fb_admins: PropTypes.string,
    item_prop_image: PropTypes.string,
    twitter_image: PropTypes.string,
    og_image: PropTypes.string,
    article_published_time: PropTypes.string,
    article_modified_time: PropTypes.string
  })
};
