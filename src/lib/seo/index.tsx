import { Helmet } from 'react-helmet';

interface SeoHeadersProps {
	title: string;
	description: string;
	canonicalUrl: string;
	openGraphImage: string;
	creator: string;
	publisher: string;
	twitterCardType: string;
}

export function SeoHeaders({ title, description, canonicalUrl, creator, openGraphImage, publisher, twitterCardType }: SeoHeadersProps) {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>{title}</title>
			<meta
				name="description"
				content={description}
			/>
			<meta
				name="robots"
				content="index, follow"
			/>
			<meta
				name="twitter:card"
				content={twitterCardType}
			/>
			<meta
				name="twitter:title"
				content={title}
			/>
			<meta
				name="twitter:description"
				content={description}
			/>
			<meta
				name="twitter:url"
				content={canonicalUrl}
			/>
			<meta
				name="twitter:image"
				content={openGraphImage}
			/>
			<meta
				property="og:type"
				content="website"
			/>
			<meta
				property="og:title"
				content={title}
			/>
			<meta
				property="og:description"
				content={description}
			/>
			<meta
				property="og:url"
				content={canonicalUrl}
			/>
			<meta
				property="og:image"
				content={openGraphImage}
			/>
			<meta
				property="og:site_name"
				content="Your Website Name"
			/>
			<meta
				property="og:creator"
				content={creator}
			/>
			<meta
				property="og:publisher"
				content={publisher}
			/>
			<link
				rel="canonical"
				href={canonicalUrl}
			/>
		</Helmet>
	);
}
