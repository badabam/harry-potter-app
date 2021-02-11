import './Button.css'
import createElement from '../../lib/createElement'

export default function Button(text) {
  return createElement('button', { className: 'Button' }, text)
}
