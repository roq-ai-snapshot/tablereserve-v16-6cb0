import { CustomerInterface } from 'interfaces/customer';
import { TableInterface } from 'interfaces/table';

export interface ReservationInterface {
  id?: string;
  customer_id: string;
  table_id: string;
  reservation_time: Date;
  status: string;
  created_at?: Date;
  updated_at?: Date;

  customer?: CustomerInterface;
  table?: TableInterface;
  _count?: {};
}
