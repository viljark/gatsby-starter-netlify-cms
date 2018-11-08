import CMS from 'netlify-cms'

import GalleryPagePreview from './preview-templates/GalleryPagePreview'
import HistoryPagePreview from './preview-templates/HistoryPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('galerii', GalleryPagePreview)
CMS.registerPreviewTemplate('ajalugu', HistoryPagePreview)
CMS.registerPreviewTemplate('avaleht', IndexPagePreview)
window.UPLOADCARE_LOCALE = 'et';