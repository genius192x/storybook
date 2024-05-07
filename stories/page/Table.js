
export const createTable = ({
	firstTeamLogo,
	firstTeamName,
	firstTeamCity,
	secondTeamLogo,
	secondTeamName,
	secondTeamCity,
	matchDate,
	matchTime,
	stadiumName,
	stadiumAdress,
	stage,
	league,
	buttonText,
	typeGame,
	headerImage,
	background,
	buttonLink,
	footerImage

}) => {
	const table = document.createElement('table');


	const section = `
<table style="border-collapse: collapse; cellpadding:0;cellspacing:0;margin-top:12px;margin-bottom:0;margin-right:0;margin-left:0;padding-left: 24px; width:100%; max-width: 600px; background: url(https://bitrix24public.com/anoprofessionalnyygandbolnyyklub.bitrix24.ru/docs/pub/81472756290cb84c6a40ee3710c7e602/showFile/?&token=aa5lopsv5byp) no-repeat; background-size: cover;">
  	<tbody>
	  <tr>
		  <td style="padding: 0px 24px;">
			  <table style="border-radius: 30px;width: 100%;padding-bottom: 24px;">
				  <tbody>
					  <tr style="height: 40px;">	
						  <td style="width: 100%; padding-top: 26px;">
							  <div style="display: inline-block;text-align: center; width: 100%;"><img src="${headerImage}" alt="Картинка команды"></div>
						  </td>
					  </tr>
					  <tr>
						  <td style="width: 100%;padding-top: 22px;">
							  <div style="display: inline-block;text-align: center; width: 100%;"><a href="https://whccska.ru/"><img src="${typeGame}" alt="Вид спорта"></a></div>
						  </td>
					  </tr>
					  <tr>
						  <td>
							  <span style="display: inline-block; width: 100%;text-align: center;font-size: 27px;color: #0D1175;font-weight: 700; font-family: sans-serif;">${league}</span>
						  </td>
					  </tr>
					  <tr>
						  <td>
							  <span style="display: inline-block; width: 100%;text-align: center;font-size: 27px;color: #C6120B;font-weight: 700; font-family: sans-serif;">${stage}</span>
						  </td>
					  </tr>
					  <tr>
						  <td>
							  <table style="width: 457px; background: #0D1175;border-collapse: collapse; cellpadding:0;cellspacing:0; margin: 0 auto; border-radius: 20px;">
								  <tbody>
									  <tr>
										  <td style="padding: 20px 0px 0px 41px; vertical-align: top;">
											  <table>
												  <tbody>
													  <tr>
														  <td>
															  <div style="display: inline-block;text-align: center; width: 100%; max-width: 100px; max-height: 120px;"><img style="object-fit: cover;" src="${firstTeamLogo}" alt="Команда один"></div>
														  </td>
													  </tr>
													  <tr>
														  <td>
															  <span style="display: inline-block; color: #fff; text-align: center; width: 100%; font-family: sans-serif; font-weight: 700; font-size: 24px;line-height: 1;">${firstTeamName}</span>
														  </td>
													  </tr>
													  <tr>
														  <td>
															  <span style="display: inline-block; color: #fff; text-align: center; width: 100%; font-family: sans-serif; font-weight: 400; font-size: 12px;line-height: 1; text-transform: uppercase;">${firstTeamCity}</span>
														  </td>
													  </tr>
												  </tbody>
											  </table>
										  </td>
										  <td style="vertical-align: top; padding: 10px 0px 10px;">
											  <table>
												  <tbody>
													  <tr>
														  <td>
															  <span style="font-size: 29px;color: #fff; font-family: sans-serif; font-weight: 700; vertical-align: top;text-align: center; display: inline-block;width: 100%;">${matchDate}</span>
														  </td>
													  </tr>
													  <tr>
														  <td>
															  <span style="font-size: 29px;color: #fff; font-family: sans-serif; font-weight: 700; vertical-align: top; text-align: center; display: inline-block;width: 100%;">${matchTime}</span>
														  </td>
													  </tr>
													  <tr>
														  <td>
															  <div style="display: inline-block;text-align: center; width: 100%;"><img src="https://bitrix24public.com/anoprofessionalnyygandbolnyyklub.bitrix24.ru/docs/pub/7425dd648a680a5c1d5c064d338eecc0/showFile/?&token=7pk629pd348f" alt="крестик"></div>
														  </td>
													  </tr>
													  <tr>
														  <td>
															  <div style="display: inline-block;text-align: center; width: 100%;"><img src="https://bitrix24public.com/anoprofessionalnyygandbolnyyklub.bitrix24.ru/docs/pub/50cd2bbd3ded57617c51fa22dd598898/showFile/?&token=i683b91tap2p" alt="Поинт"></div>
														  </td>
													  </tr>
													  <tr>
														  <td>
															  <span style="font-size: 18px;color: #fff; font-family: sans-serif; font-weight: 700; vertical-align: top; text-align: center; display: inline-block;width: 100%;line-height: 1;">${stadiumName}</span>
														  </td>
													  </tr>
													  <tr>
														  <td>
															  <span style="font-size: 12px;color: #fff; font-family: sans-serif; font-weight: 400; vertical-align: top; text-align: center; display: inline-block;width: 100%;white-space: nowrap;line-height: 1;">${stadiumAdress}</span>
														  </td>
													  </tr>
												  </tbody>
											  </table>
										  </td>
										  <td style="padding: 20px 41px 0px 0px; vertical-align: top;">
											  <table>
												  <tbody>
													  <tr>
														  <td>
															  <div style="display: inline-block;text-align: center; width: 100%; max-width: 100px; max-height: 120px;"><img style="object-fit: cover;"src="${secondTeamLogo}" alt="Команда два"></div>
														  </td>
													  </tr>
													  <tr>
														  <td>
															  <span style="display: inline-block; color: #fff; text-align: center; width: 100%; font-family: sans-serif; font-weight: 700; font-size: 24px;line-height: 1;">${secondTeamName}</span>
														  </td>
													  </tr>
													  <tr>
														  <td>
															  <span style="display: inline-block; color: #fff; text-align: center; width: 100%; font-family: sans-serif; font-weight: 400; font-size: 12px;line-height: 1;">${secondTeamCity}</span>
														  </td>
													  </tr>
												  </tbody>
											  </table>
										  </td>
									  </tr>
								  </tbody>
							  </table>
						  </td>
					  </tr>
					  <tr>
						  <td>
							  <div style="padding: 20px;margin: 20px auto 40px;text-align: center;"><a href="${buttonLink}" style="background: #C6120B;color: #fff;border: 4px solid #0D1175;text-decoration: none;font-family: sans-serif;padding: 20px 20px;border-radius: 25px;font-size: 26px;font-weight: 600;">${buttonText}</a></div>
						  </td>
					  </tr>
					  <tr>
						  <td>
							  <div style="display: inline-block;text-align: center; width: 100%;"><img src="${footerImage}" alt="Картинка"></div>
						  </td>
					  </tr>
				  </tbody>
			  </table>
		  </td>
	  </tr>
  </tbody>
  </table>
  `;
	  table.style.cssText = `border-collapse: collapse; cellpadding:0;cellspacing:0;margin-top:12px;margin-bottom:0;margin-right:0;margin-left:0;padding-left: 24px; width:100%; max-width: 600px; background: url(${background}) no-repeat; background-size: cover;`
	  table.insertAdjacentHTML('beforeend', section);

  return table;
};
