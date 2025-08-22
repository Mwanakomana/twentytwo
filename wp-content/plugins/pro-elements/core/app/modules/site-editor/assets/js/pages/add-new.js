<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html><body><p>import { AddNewButton, Heading, Grid, CardOverlay } from '@elementor/app-ui';
import { SiteParts } from '@elementor/site-editor';
import './add-new.scss';
import { Context as TemplatesContext } from '../context/templates';
import BackButton from '../molecules/back-button';
import useFeatureLock from 'elementor-pro-app/hooks/use-feature-lock';

export default function AddNew() {
	const { templates } = React.useContext( TemplatesContext ),
		hasTemplates = 1 &lt;= Object.keys( templates ).length;

	const { isLocked, ConnectButton } = useFeatureLock( 'site-editor' );

	/**
	 * An hover element for each site part.
	 *
	 * @param {any} props
	 */
	const HoverElement = ( props ) =&gt; {
		if ( isLocked ) {
			return (
				<cardoverlay classname="e-site-editor__promotion-overlay">
					<div classname="e-site-editor__promotion-overlay__link">
						<i classname="e-site-editor__promotion-overlay__icon eicon-lock"></i>
					</div>
				</cardoverlay>
			);
		}

		return (
			<a href="/wp-content/plugins/pro-elements/core/app/modules/site-editor/assets/js/pages/%7B" props.urls.create classname="eps-card__image-overlay eps-add-new__overlay">
				<addnewbutton hidetext="{" true></addnewbutton>
			</a>
		);
	};

	HoverElement.propTypes = {
		urls: PropTypes.object.isRequired,
	};

	return (
		<section classname="e-site-editor__add-new">
			<grid container direction="column" classname="e-site-editor__header">
				{ hasTemplates &amp;&amp; <grid item><backbutton></backbutton></grid> }
				<grid item container justify="space-between" alignitems="start">
					<heading variant="h1">{ __( 'Start customizing every part of your site', 'elementor-pro' ) }</heading>
					{ isLocked &amp;&amp; <connectbutton></connectbutton> }
				</grid>
			</grid>
			<siteparts hoverelement="{"></siteparts>
		</section>
	);
}
</p></body></html>
