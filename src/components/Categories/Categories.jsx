import { useState } from 'react';
import { useSelector } from 'react-redux';
import svg from '../../images/icon_expenses_sprites.svg';
import styledComponents from './CategoriesStyled';
import { formating } from '../Balance/Balance';
import { Chart } from 'components/Chart/Chart';

const {
	ListOfBalanceChanges,
	ItemOfBalanceChanges,
	TitleOfBalanceChanges,
	SvgBoxStyle,
	BtnToggleStats,
	BoxForSvg,
	CategoriesStats,
	BoxForSchedule,
} = styledComponents;

const Categories = ({ onClick }) => {
	const [filter, setFilter] = useState('');
	const statistics = useSelector(state => state.statistics.statistics);

	if (!statistics) {
		return (
			<CategoriesStats>
				<TitleOfBalanceChanges>"No data to display!"</TitleOfBalanceChanges>
			</CategoriesStats>
		);
	}

	const onItemClick = event => {
		setFilter(event.currentTarget.id);
	};
	const filtredData = () => {
		if (!filter) return;

		const data = statistics.data.Categories.CategoriesData;

		const [_, Categories] = Object.entries(data).filter(el => {
			return el[0] === filter;
		})[0] || [null, false];

		const res = Object.entries(Categories)
			.filter(el => {
				return el[0] !== 'total';
			})
			.map(el => {
				return { name: el[0], cost: el[1] };
			});

		if (res.length === 0) {
			return null;
		}
		return res;
	};

	const {
		Categories: {
			CategoriesData: {
				Products: products,
				Alcohol: alcohol,
				Entertainment: entertainment,
				Health: health,
				Transport: transport,
				Housing: housing,
				Technique: technique,
				Communal: communal,
				Hobbies: hobbies,
				Education: education,
				Other: other,
			},
			expenseTotal,
		},
	} = statistics.data;

	return (
		<>
			<CategoriesStats>
				<div>
					<BtnToggleStats type="button">
						<svg width="10" height="10" onClick={onClick}>
							<use href={`${svg}#arrow_left`} />
						</svg>
					</BtnToggleStats>
					<TitleOfBalanceChanges>Categories</TitleOfBalanceChanges>
					<BtnToggleStats type="button" onClick={onClick}>
						<svg width="10" height="10">
							<use href={`${svg}#arrow_right`} />
						</svg>
					</BtnToggleStats>
				</div>

				{expenseTotal ? (
					<ListOfBalanceChanges>
						{products && (
							<ItemOfBalanceChanges onClick={onItemClick} id="products">
								<p>{formating(products.total)}</p>
								<BoxForSvg>
									{' '}
									<SvgBoxStyle>
										<use href={`${svg}#products`} />
									</SvgBoxStyle>
								</BoxForSvg>

								<p>Products</p>
							</ItemOfBalanceChanges>
						)}
						{alcohol && (
							<ItemOfBalanceChanges onClick={onItemClick} id="alcohol">
								<p>{formating(alcohol.total)}</p>
								<BoxForSvg>
									{' '}
									<SvgBoxStyle>
										<use href={`${svg}#alcohol`} />
									</SvgBoxStyle>
								</BoxForSvg>
								<p>Alcohol</p>
							</ItemOfBalanceChanges>
						)}
						{entertainment && (
							<ItemOfBalanceChanges onClick={onItemClick} id="entertainment">
								<p>{formating(entertainment.total)}</p>
								<BoxForSvg>
									{' '}
									<SvgBoxStyle>
										<use href={`${svg}#entertainment`} />
									</SvgBoxStyle>
								</BoxForSvg>
								<p>Entertainment</p>
							</ItemOfBalanceChanges>
						)}
						{health && (
							<ItemOfBalanceChanges onClick={onItemClick} id="health">
								<p>{formating(health.total)}</p>
								<BoxForSvg>
									{' '}
									<SvgBoxStyle>
										<use href={`${svg}#health`} />
									</SvgBoxStyle>
								</BoxForSvg>
								<p>Health</p>
							</ItemOfBalanceChanges>
						)}
						{transport && (
							<ItemOfBalanceChanges onClick={onItemClick} id="transport">
								<p>{formating(transport.total)}</p>
								<BoxForSvg>
									{' '}
									<SvgBoxStyle>
										<use href={`${svg}#transport`} />
									</SvgBoxStyle>
								</BoxForSvg>
								<p>Transport</p>
							</ItemOfBalanceChanges>
						)}
						{housing && (
							<ItemOfBalanceChanges onClick={onItemClick} id="housing">
								<p>{formating(housing.total)}</p>
								<BoxForSvg>
									{' '}
									<SvgBoxStyle>
										<use href={`${svg}#housing`} />
									</SvgBoxStyle>
								</BoxForSvg>
								<p>Housing</p>
							</ItemOfBalanceChanges>
						)}
						{technique && (
							<ItemOfBalanceChanges onClick={onItemClick} id="technique">
								<p>{formating(technique.total)}</p>
								<BoxForSvg>
									{' '}
									<SvgBoxStyle>
										<use href={`${svg}#technique`} />
									</SvgBoxStyle>
								</BoxForSvg>
								<p>Technique</p>
							</ItemOfBalanceChanges>
						)}
						{communal && (
							<ItemOfBalanceChanges
								onClick={onItemClick}
								id="communal"
							>
								<p>{formating(communal.total)}</p>
								<BoxForSvg>
									{' '}
									<SvgBoxStyle>
										<use href={`${svg}#communal`} />
									</SvgBoxStyle>
								</BoxForSvg>
								<p>Communal, communication</p>
							</ItemOfBalanceChanges>
						)}
						{hobbies && (
							<ItemOfBalanceChanges onClick={onItemClick} id="hobbies">
								<p>{formating(hobbies.total)}</p>
								<BoxForSvg>
									{' '}
									<SvgBoxStyle>
										<use href={`${svg}#hobbies`} />
									</SvgBoxStyle>
								</BoxForSvg>
								<p>Sports, hobbies</p>
							</ItemOfBalanceChanges>
						)}
						{education && (
							<ItemOfBalanceChanges onClick={onItemClick} id="education">
								<p>{formating(education.total)}</p>
								<BoxForSvg>
									{' '}
									<SvgBoxStyle>
										<use href={`${svg}#education`} />
									</SvgBoxStyle>
								</BoxForSvg>
								<p>Education</p>
							</ItemOfBalanceChanges>
						)}
						{other && (
							<ItemOfBalanceChanges onClick={onItemClick} id="other">
								<p>{formating(other.total)}</p>
								<BoxForSvg>
									{' '}
									<SvgBoxStyle>
										<use href={`${svg}#other`} />
									</SvgBoxStyle>
								</BoxForSvg>
								<p>Other</p>
							</ItemOfBalanceChanges>
						)}
					</ListOfBalanceChanges>
				) : (
					<TitleOfBalanceChanges>"No data to display!"</TitleOfBalanceChanges>
				)}
			</CategoriesStats>
			{filter && (
				<BoxForSchedule>
					<Chart/>{' '}
				</BoxForSchedule>
			)}
		</>
	);
};

export default Categories;