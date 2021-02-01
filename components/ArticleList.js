import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";
import React from "react";

const ArticleList = ({ articles }) => {
	return (
		<div className={articleStyles.grid}>
			{articles.map((article, i) => (
				<ArticleItem key={i} article={article} />
			))}
		</div>
	);
};

export default ArticleList;
