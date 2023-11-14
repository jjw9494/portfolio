Mobile
@media (max-width: 768px) {
	/* About */
	.about {
		display: flex;
		flex-direction: column;
		padding-inline: 1rem;
	}
	.about > h2 {
		font-size: 2.2rem;
		padding-bottom: 2rem;
		padding-inline: 0;
	}

	.about-grid {
		padding: 0;
		display: flex;
		flex-direction: column;
		padding-inline: 0;
		gap: 2rem;
	}

	/* Portfolio section */

	.portfolio {
		padding-inline: 1rem;
	}

	.portfolio-grid-item {
		display: flex;
		flex-direction: column;
	}

	.portfolio > h2 {
		padding-inline: 1rem;
		margin-bottom: 3rem;
	}

	.portfolio-grid-item {
		display: flex;
		flex-direction: column;
		padding-inline: 0rem;
		margin-bottom: 3rem;
	}

	.portfolio :nth-child(3) > img {
		order: 0;
	}

	.portfolio :nth-child(3) > .portfolio-text-content {
		padding-left: 0;
		padding-right: 0rem;
	}

	.portfolio-grid-item > img {
		height: 522px;
		width: 522px;
	}

	.portfolio-text-content {
		display: flex;
		flex-direction: column;
		padding-left: 0rem;
	}
}
