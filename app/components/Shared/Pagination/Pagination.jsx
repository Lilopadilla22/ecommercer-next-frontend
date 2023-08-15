'use client'

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import styles from './Pagination.module.scss'
import { Pagination as PaginationSU } from 'semantic-ui-react'

export function Pagination(props) {
  
  const { currentPage, totalPages } = props;
  const router = useRouter()
  const pathname = usePathname()
 
    const onPageChange = (_, data) => {
      const { activePage } = data;

      // router.replace({searchParams: {...router.searchParams, page: activePage}})
      router.push(`${pathname}?page=${activePage}`)
    };    

    return (
      <div className={styles.container}>
        <PaginationSU
          defaultActivePage={currentPage}
          totalPages={totalPages}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          onPageChange={onPageChange}
        />
      </div>
    );
  }
