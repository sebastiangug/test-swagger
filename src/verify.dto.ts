import { IsPhoneNumber, IsString, Length } from 'class-validator';

export class VerifyMobileDTO {
  /**
   * The user account id
   * @example 507c7f79bcf86cd7994f6c0e
   */
  @Length(24, 24)
  @IsString()
  _id: string;

  /**
   * Fully qualified phone number including extension
   * @example 447545587521
   */
  @IsPhoneNumber()
  @IsString()
  mobile_number: string;
}
