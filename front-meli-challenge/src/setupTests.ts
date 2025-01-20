import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder as NodeTextDecoder } from 'util';

global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = NodeTextDecoder as unknown as typeof global.TextDecoder;